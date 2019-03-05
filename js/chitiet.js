import $ from 'jquery';


import Swal from 'sweetalert2'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap';

//import 2
//import {NguoiDung} from'../models/nguoidung';

//import 1
import '../css/chitiet.css'

//import 3
import ngD from '../models/nguoidung'

function getParamsFromURL(){
    var params = window.location.search.substr(1,).split('=');
    console.log(params)
    var courseId = params[1];
    
}
getParamsFromURL();

Swal.fire('Any fool can use a computer')
