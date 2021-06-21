import React from 'react'
import Posts from './Posts';
import { motion } from "framer-motion";
import {
    pageVariants,
    titleVariants
} from '../components/Animations';

function Home( {posts} ) {
    return (
       

        <motion.div
        initial={'start'}
        animate={'stop'}
        variants={pageVariants}
        >
            <motion.h2 variants={titleVariants} className='text-center'>Home</motion.h2>
            <Posts posts={posts} />
            
        </motion.div>
    )
}

export default Home
