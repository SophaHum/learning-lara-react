<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;

use function Termwind\render;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Home', [
            'posts' => $posts,
        ]);
    }
}
