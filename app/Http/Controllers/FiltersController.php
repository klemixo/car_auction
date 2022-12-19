<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\car;

class FiltersController extends Controller
{
    //
    public function getFilters(){
        $fields = ['marka','model','production_year','selling_branch'];
        $filters = [];
        foreach ($fields as $field) {

            $filters[$field] = car::select($field)->groupBy($field)->orderBy($field,'ASC')->get();
        }
        return $filters;
    }
}
