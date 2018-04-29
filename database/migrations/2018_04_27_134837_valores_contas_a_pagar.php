<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ValoresContasAPagar extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('valores_contas_a_pagar', function (Blueprint $table) {
            $table->increments('id');
            $table->string('contas_a_pagar_id'); 
            $table->string('data_pagamento');
            $table->string('valor');   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
