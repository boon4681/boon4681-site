import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { boonmotion } from "./Motion"


export default () => {
    return (
        <div className="content relative z-20">
            <motion.div className="float-right link-group">
                <boonmotion.FaceDown delay={2}>
                    <Link to="/projects">Projects</Link>
                </boonmotion.FaceDown>
                <boonmotion.FaceDown delay={1.75}>
                    <Link to="/about">About</Link>
                </boonmotion.FaceDown>
                <boonmotion.FaceDown delay={1.5}>
                    <Link to="/">Home</Link>
                </boonmotion.FaceDown>
            </motion.div>
        </div>
    )
}