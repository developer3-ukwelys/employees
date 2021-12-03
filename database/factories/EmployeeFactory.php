<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
                'name' => $this->faker->name(),
                'email' => $this->faker->unique()->safeEmail(),
                'phone' => $this->faker->phoneNumber,
                'department' => $this->faker->word,
                'dob' => $this->faker->dateTimeBetween('1990-01-01', '2012-12-31')
                ->format('d/m/Y')
        ];
    }
}
