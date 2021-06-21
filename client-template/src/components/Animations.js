export const pageVariants = {
    start: { opacity: 0 },
    stop: { 
        opacity: 1,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.3,
        }
    },
}


export const titleVariants = {
    start: { x: '-100vw' },
    stop: {  
        x: 0,
        transition: {
            type: 'spring'
        }
    },
}
