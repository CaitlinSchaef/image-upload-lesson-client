import { useContext, useState } from "react"
import { AuthContext } from "./context"
import { createImage, getImages } from "./api"



const UploadImage = () => {
    const { auth } = useContext(AuthContext)
    const [image, setImage] = useState(undefined)
    const [title, setTitle] = useState('')

    const submit = () => {
        // we need to call create image
        createImage({
            auth,
            title,
            image,
        })
        .then(response => {
            console.log('UPLOAD IMAGE: RESPONSE: ', response)
        })
        .catch(error => console.log('IMAGE UPLOAD ERROR: ', error))
    }
 
    return (
        <div>
            <h1>Upload Image</h1>
            <div>Image Title</div>
            <input
                onChange={e => setTitle(e.target.value)}
                value = { title }
            />
            <div>
                <input
                // we're saying images only, we could further limit it to png or whatever
                accept='image/*'
                type='file'
                // this files[0], is only letting them upload one file
                onChange={e => setImage(e.target.files[0])}
                />
            </div>
            <div>
                <button onClick={() => submit()}>
                    Submit Photo
                </button>
            </div>
        </div>
    )
}

export default UploadImage