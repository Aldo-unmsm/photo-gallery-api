import multer from 'multer';
import { v4 as uuidv4 } from 'uuid'
import path from 'path'

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        //uuidv4() genera un id aleatorio
        //path agrega la extension del archivo .jpg .png ...
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

export default multer({storage});