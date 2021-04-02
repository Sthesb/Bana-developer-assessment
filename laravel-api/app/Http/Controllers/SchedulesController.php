<?php

namespace App\Http\Controllers;


use App\Models\Schedules;
use Illuminate\Http\Request;

class SchedulesController extends Controller
{
    public function index()
    {
        return response()->json(Schedules::all(), 200);
    }

    public function show(int $id)
    {
        $schedule = Schedules::find($id);
        if(is_null($schedule)){
            return response()->json(['message' => 'Schedule Not Found'], 404);
        }else{
            return response()->json($schedule, 200);
        }
    }

    public function store(Request $request)
    {
        $schedule = Schedules::create($request->all());
        return response($request, 201);
    }

    public function update( $id, Request $request)
    {
        $schedule = Schedules::find($id);
        if(is_null($schedule)){
            return response()->json(['message' => 'Schedule Not Found'], 404);
        }
        else{
            return response($schedule->update($request->all()), 200);
        }
    }

    public function destroy(int $id)
    {
        $schedule = Schedules::find($id);
        if(is_null($schedule)){
            return response()->json(['message' => 'Schedule Not Found'], 404);
        }else{
            return response()->json($schedule->destroy($id), 204);
        }
    }
}
