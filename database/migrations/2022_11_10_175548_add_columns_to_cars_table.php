<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->string('marka',200)->nullable();
            $table->string('model',200)->nullable();
            $table->integer('production_year')->nullable();
            $table->text('image_url')->nullable();
            $table->text('video_url')->nullable();
            $table->integer('final_bid')->nullable();
            $table->string('status',100)->nullable();
            $table->string('sold_date',200)->nullable();
            $table->integer('stock')->nullable();
            $table->string('selling_branch',200)->nullable();
            $table->string('vin',200)->nullable();
            $table->text('loss')->nullable();
            $table->text('primary_damage')->nullable();
            $table->text('title')->nullable();
            $table->text('start_code')->nullable();
            $table->text('key')->nullable();
            $table->text('odometer')->nullable();
            $table->text('engine')->nullable();
            $table->text('transmission')->nullable();
            $table->text('drive_line_type')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cars', function (Blueprint $table) {
            //
        });
    }
}
