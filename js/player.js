// ==========================================
// 1. حالات اللاعب (Player States)
// ==========================================
const STATES = {
    WALK: 'walk',
    SPRINT: 'sprint',
    CROUCH: 'crouch',
    SLIDE: 'slide',
    JUMP: 'jump',
    AIR: 'air'
};

let currentState = STATES.WALK;

// إعدادات الفيزياء والحركة
const movementConfig = {
    walkSpeed: 0.1,
    sprintSpeed: 0.22,
    crouchSpeed: 0.05,
    slideSpeed: 0.28,
    slideDecay: 0.96, // تباطؤ الانزلاق التدريجي
    jumpForce: 0.35,
    gravity: 0.015,
    staminaRegen: 0.2,
    staminaDrain: 0.4
};

// ==========================================
// 2. تحديث حالة الحركة (Movement FSM Logic)
// ==========================================
function updatePlayerMovement(delta) {
    const isMoving = keys['w'] || keys['s'] || keys['a'] || keys['d'];
    const wantsToSprint = (keys['shift'] || keys['mousedown']) && stamina > 0;
    
    // --- منطق آلة الحالات (State Machine) ---
    switch (currentState) {
        case STATES.WALK:
            if (wantsToSprint && isMoving) {
                currentState = STATES.SPRINT;
            } else if (keys['c']) {
                currentState = STATES.CROUCH;
            }
            break;

        case STATES.SPRINT:
            if (!wantsToSprint || !isMoving || stamina <= 0) {
                currentState = STATES.WALK;
            } else if (keys['c']) {
                // تحويل السرعة الحالية إلى انزلاق (Slide) عند الجري
                currentState = STATES.SLIDE;
                slideVelocity = movementConfig.slideSpeed;
            }
            break;

        case STATES.CROUCH:
            if (!keys['c']) {
                currentState = STATES.WALK;
            }
            break;

        case STATES.SLIDE:
            // تباطؤ الانزلاق حتى العودة للحجم الطبيعي
            slideVelocity *= movementConfig.slideDecay;
            if (slideVelocity < movementConfig.crouchSpeed || !keys['c']) {
                currentState = keys['c'] ? STATES.CROUCH : STATES.WALK;
            }
            break;
    }

    // --- حساب السرعة بناءً على الحالة الحالية ---
    let currentSpeed = movementConfig.walkSpeed;
    
    if (currentState === STATES.SPRINT) {
        currentSpeed = movementConfig.sprintSpeed;
        stamina = Math.max(0, stamina - movementConfig.staminaDrain);
    } else if (currentState === STATES.CROUCH) {
        currentSpeed = movementConfig.crouchSpeed;
        stamina = Math.min(100, stamina + movementConfig.staminaRegen);
    } else if (currentState === STATES.SLIDE) {
        currentSpeed = slideVelocity;
    } else {
        stamina = Math.min(100, stamina + movementConfig.staminaRegen);
    }

    // --- القفز (Jumping) ---
    if (keys['space'] && isGrounded) {
        velocity.y = movementConfig.jumpForce;
        isGrounded = false;
        currentState = STATES.AIR;
    }

    // --- تطبيق اهتزاز الكاميرا الواقعي (Head Bobbing) ---
    applyHeadBob(isMoving, currentSpeed);
}

// ==========================================
// 3. اهتزاز الكاميرا أثناء الحركة (Head Bob)
// ==========================================
let bobTimer = 0;
function applyHeadBob(isMoving, speed) {
    if (isGrounded && isMoving) {
        bobTimer += speed * 1.5;
        const targetHeight = (currentState === STATES.CROUCH || currentState === STATES.SLIDE) ? 0.8 : 1.6;
        
        // حركات صغيرة دائرية للكاميرا لإعطاء شعور المشي والركض Realism
        camera.position.y = playerGroup.position.y + targetHeight + Math.sin(bobTimer) * 0.08;
        camera.position.x = playerGroup.position.x + Math.cos(bobTimer * 0.5) * 0.04;
    }
}
