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

let UsersSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    basket: {
        type: mongoose.ObjectId,
        ref: 'basket'
    },
    favorites: {
        type: mongoose.ObjectId,
        ref: 'favorites'
    }
})
let User = mongoose.model('user', UsersSchema);

let BasketsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.ObjectId,
        ref: 'user'
    },
    clothes: [{
        type: mongoose.ObjectId,
        ref: 'cloth'
    }]
})
let Basket = mongoose.model('basket', BasketsSchema);

let FavoritesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.ObjectId,
        ref: 'user'
    },
    clothes: [{
        type: mongoose.ObjectId,
        ref: 'cloth'
    }]
})
let Favorites = mongoose.model('favorites', FavoritesSchema);


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


app.get('/getCloth', async function (req, res){
    let id = req.query.id;
    let cloth = await Cloth.findOne({_id: id});
    res.send(cloth);
})

app.post('/register', async function (req, res) {
    let {name, surname, email, password} = req.body;
    let basket = [];
    let favorites = [];

    let user = new User({
        name: name,
        surname: surname,
        email: email,
        password: password,
        basket: basket,
        favorites: favorites
    });
    await user.save();
    res.send(user)
});

app.post('/login', async function(req, res) {
    let {email, password} = req.body;

    let user = await User.findOne({email: email}).populate('basket').populate('favorites');

    if(!user) {
        res.send('Incorrect email!')
        return
    }

    if (user.password == password) {
        res.send(user) 
    } else {
        res.send('Incorrect password!')
    }



})