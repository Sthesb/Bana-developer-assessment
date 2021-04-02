<?php

namespace App\Http\Controllers;

use App\Models\Route;
use Illuminate\Http\Request;

class RoutesController extends Controller
{
    public function index()
    {
        return response()->json(Route::all(), 200);
    }

    public function show(int $id)
    {
        $route = Route::find($id);
        if(is_null($route)){
            return response()->json(['message' => 'Route Not Found'], 404);
        }else{
            return response()->json($route, 200);
        }
    }

    public function store(Request $request)
    {
        $route = Route::create($request->all());
        return response($request, 201);
    }

    public function update(Request $request, int $id)
    {
        $route = Route::find($id);
        if(is_null($route)){
            return response()->json(['message' => 'Route Not Found'], 404);
        }else{
            return response($route->update($request->all()), 200);
        }
    }

    public function destroy(int $id)
    {
        $route = Route::find($id);
        if(is_null($route)){
            return response()->json(['message' => 'Route Not Found'], 404);
        }else{
            return response()->json($route->destroy($id), 204);
        }
    }
}
