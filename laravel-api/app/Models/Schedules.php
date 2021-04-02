<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedules extends Model
{
    use HasFactory;
    protected $fillable = [
        'route_from',
        'route_to',
        'date',
        'time_from',
        'time_to',
        'ticket_price'
    ];
}
