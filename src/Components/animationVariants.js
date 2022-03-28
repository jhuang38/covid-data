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

const hoverVariant = {
    hover: {
        y: -2,
        scale: 1.05,
    }
}

const hoverVariant2 = {
    hover: {
        scale: 1.04
    }
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
    },
    transition: {
        duration: 0.5
    }
}

const buttonvariant = {
    hover: {
        scale: 1.05
    },
    click: {
        scale: 0.95
    }
}

export {pageTransitionVariant, hoverVariant, hoverVariant2, loaderVariant, fadeinout, buttonvariant};