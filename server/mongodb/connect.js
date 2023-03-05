import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(()=>{ console.log('DB conectada correctamente')})
    .catch((err) => { console.log(err)})
}

export default connectDB;