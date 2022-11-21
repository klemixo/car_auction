<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\car;

class getCars extends Controller
{

    public function getCars(Request $req){
        $query = car::orderBy('id', 'desc');
        $data = $req->all();
        foreach ($data as $key => $value) {
            $query->where($key,"=",$value);
        }
        return $query->limit(5)->get();
    }
}
