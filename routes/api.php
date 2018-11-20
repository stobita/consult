<?php

use Illuminate\Http\Request;

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

Route::group(["middleware" => "guest:api"], function () {
    Route::post("/hello", "AuthController@hello");
    Route::post("/signup", "AuthController@signup");
    Route::post("/signin", "AuthController@signin");
    Route::get("recruitments", "RecruitmentController@index");
});

Route::group([ 'middleware' => 'auth:api', ], function ($router) {
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('recruitment', 'RecruitmentController@store');
});
