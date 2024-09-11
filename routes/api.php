<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/user', function (Request $request) {
})->middleware('auth:sanctum');

Route::get('/posts', [PostController::class, 'index']);

