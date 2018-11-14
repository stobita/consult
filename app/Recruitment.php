<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recruitment extends Model
{
    //
  public function user()
  {
    return $this->belongsTo('App\User');
  }
}
