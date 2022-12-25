<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\car;

class FiltersController extends Controller
{
    //
    public function getFilters(Request $req){
        $data = $req->all();
        $fields = ['marka','model','production_year','selling_branch'];
        $filters = [];
        foreach ($fields as $field) {
            if($field === 'model'){
                if(count($data) > 0 &&  isset($data['newMarka'])){
                    $filters[$field] = car::select($field)->where('marka', '=', $data['newMarka'])->groupBy($field)->orderBy($field,'ASC')->get();
                    continue;
                }
            }
            $filters[$field] = car::select($field)->groupBy($field)->orderBy($field,'ASC')->get();

        }
        return $filters;
    }
}
