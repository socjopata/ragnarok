class CreateBaseStats < ActiveRecord::Migration[5.0]
  def change
    create_table :base_stats do |t|
      t.integer :physique
      t.integer :dexerity
      t.integer :perception
      t.integer :inteligence
      t.integer :self_control
      t.integer :entropy
      t.references :hero, foreign_key: true
    end
  end
end
