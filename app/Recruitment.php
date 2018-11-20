<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recruitment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'subject', 'body', 'user_id',
    ];
    //
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
