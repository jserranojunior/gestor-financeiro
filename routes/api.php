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

/* API */
Route::get('/financeiro', 'Api\Financial\ApiBillsToPay@index');
Route::get('/financeiro/edit/{id}/{data}', 'Api\Financial\ApiBillsToPay@edit');
//Route::get('/financeiro/{id}', 'Api\Financial\ApiBillsToPay@show');

/* v1 */

Route::get('/v1/financeiro', 'Api\v1\Financial\ApiFinancial@index');
Route::post('/v1/financeiro', 'Api\v1\Financial\ApiBillsToPay@store');
Route::get('/v1/financeiro/{id}', 'Api\v1\Financial\ApiBillsToPay@edit');
Route::put('/v1/financeiro/{id}', 'Api\v1\Financial\ApiBillsToPay@update');


Route::get('/v1/categorias', 'Api\v1\Financial\ApiCategoriesBillsToPay@index');