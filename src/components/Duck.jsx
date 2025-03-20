import { PositionalAudio, useCursor, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import useAudioListener from "../hooks/useAudioListener.jsx";

function Duck(props) {
    const [hovered, setHovered] = useState(false);
    const soundRef = useRef();

    const duck = useGLTF("./models/duck.glb");

    const audioListener = useAudioListener();

    useCursor(hovered);

    return (
        <group>
            <PositionalAudio
                ref={soundRef}
                url={"./sounds/quack.mp3"}
                audioListener={audioListener}
                loop={false}
            />
            <primitive
                object={duck.scene}
                onPointerOver={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => soundRef.current.play()}
                {...props} />
        </group>
    );
}

export default Duck;