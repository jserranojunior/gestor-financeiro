<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ContasAPagar extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contas_a_pagar', function (Blueprint $table) {
            $table->increments('id');
            $table->string('favorecido');
            $table->string('inicio_data_pagamento');
            $table->string('fim_data_pagamento');
            $table->string('categoria');  
            $table->string('descricao');  
            $table->string('forma_pagamento');
            $table->string('tipo_conta');
            $table->string('parcelas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contas_a_pagar');
    }
}
