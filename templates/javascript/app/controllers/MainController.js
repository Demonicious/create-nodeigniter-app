const { Controller } = require("nodeigniter.js");

class MainController extends Controller {
    index() {
        let data = {
            title: 'Homepage - Nodeigniter'
        }

        this.load.view('index', data);
    }

    _404() {
        this.load.view('404');
    }
}

module.exports = MainController;
