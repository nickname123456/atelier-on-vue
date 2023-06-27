let express = require(`express`);
let app = express();
let port = 3005;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка CORS
let cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));


// Настройка POST-запроса — JSON
app.use(express.json());

// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/atelier-on-vue');


let clothesSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    category: {
        type: mongoose.ObjectId, // .populate('category')
        ref: 'category'
    }
});
let Cloth = mongoose.model('cloth', clothesSchema);

let CategoriesSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
});
let Category = mongoose.model('category', CategoriesSchema);



app.get('/getClothes', async function (req, res) {
    let category = req.query.category; // выбор категории
    let offset = Number(req.query.offset) // .slice(offset)
    let count = Number(req.query.count) // arr.length = 5

    let clothes;
    if (category) {
        clothes = await Cloth.find({ category: category }).populate('category');
    } else {
        clothes = await Cloth.find().populate('category');
    }

    if (offset) {
        clothes = clothes.slice(offset);
    }

    if (count) {
        clothes.length = count
    }


    res.send(clothes);
});

app.get('/getCategories', async function (req, res){
    let categories = await Category.find();
    res.send(categories);
})

