<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/user2', function (Request $request) {
    return response()->json([
        'ss'=>Auth::user()
    ]);
});
Route::post('Register',[RegisterController::class,'create']);
Route::post('Login',[LoginController::class,'authenticate']);
Route::apiResource('Category','App\Http\Controllers\CategoryController');
Route::apiResource('Image','App\Http\Controllers\ImageController');
Route::apiResource('Annonce','App\Http\Controllers\AnnonceController');
