<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\car;

class getCars extends Controller
{
    public function getCars(){
        return car::orderBy('id', 'desc')->limit(5)->get();
    }
}
