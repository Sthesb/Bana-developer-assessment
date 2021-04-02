<?php

use App\Http\Controllers\RoutesController;
use App\Http\Controllers\SchedulesController;
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
// routes
Route::resource('routes', RoutesController::class);

// schedules
Route::resource('schedules', SchedulesController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
