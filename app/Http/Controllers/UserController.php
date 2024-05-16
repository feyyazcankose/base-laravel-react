<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return User::query()
        ->select('id', 'name', 'email','created_at')
        ->get();
    }
}
