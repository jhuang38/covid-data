const pageTransitionVariant = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        y: '-100vh',
        opacity: 0
    }
}

const hoverVariant2 = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.9
    },
    chover: {
        color: 'rgb(136, 201, 249)',
        backgroundColor: '#000000',
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: 'linear'
        }
    },
}

const loaderVariant = {
    animate: {
        rotate: 360
    },
    transition: {
        loop: Infinity,
        duration: 1,
        ease: 'easeOut'
        
    }
}

const fadeinout = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0
    }
}

const dropinVariant = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: '100vh',
        opacity: 0
    }
}

export {pageTransitionVariant, hoverVariant2, loaderVariant, fadeinout, dropinVariant};