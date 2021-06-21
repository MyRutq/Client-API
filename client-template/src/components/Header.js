import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { motion } from 'framer-motion'


function Header() {

    function randomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
        }
        return 'rgb(' + color.join(', ') + ')';
        } 
    

    return (
        <motion.div >
            <Jumbotron className='text-center' >
                <motion.h1 whileHover={{ scale: 1.4, color: randomColor() }}>My Magical Blog</motion.h1>
            </Jumbotron>
        </motion.div>
    )
}

export default Header


