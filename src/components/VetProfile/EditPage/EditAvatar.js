import React from "react";
import AvatarEditor from 'react-avatar-editor'
import vet1 from "../ViewPage/DefaultPictures/vet1.jpg"

class EditAvatar extends React.Component {
    render() {
        return (
            <AvatarEditor
                image= {vet1}
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
            />
        )
    }
}

export default EditAvatar