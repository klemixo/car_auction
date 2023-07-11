<?php

use App\Http\Controllers\FiltersController;
use App\Http\Controllers\getCars;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('cars', [getCars::class, 'getCars']);
Route::get('similiar-cars', [getCars::class, 'getRandomCars']);
Route::get('cars/{id}', [getCars::class, 'getCar']);
Route::get('filters', [FiltersController::class, 'getFilters']);
Route::post('claim', [getCars::class, 'claimLot']);
Route::get('cars-vin/{vin}', [getCars::class, 'getCarsByVin']);
