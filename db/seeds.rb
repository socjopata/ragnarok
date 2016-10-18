Hero.first_or_create([
  { name: 'Berzerker' },
  { name: 'Cień' },
  { name: 'Einher' },
  { name: 'Huskarl' },
  { name: 'Jarl' },
  { name: 'Łowca' },
  { name: 'Skald'},
  { name: 'Techmistrz' },
  { name: 'Thane' },
  { name: 'Trickster' },
  { name: 'Wieszcz' },
  { name: 'Wiking' },
  { name: 'Wólwa' },
  { name: 'Valkiria' }
])

BaseStat.create(hero_id: Hero.find_by(name: 'Berzerker').id, physique: 7, dexerity: 4, perception: 4, inteligence: 3, self_control: 5, entropy: 4)
BaseStat.create(hero_id: Hero.find_by(name: 'Cień').id, physique: 4, dexerity: 7, perception: 5, inteligence: 4, self_control: 4, entropy: 3)
BaseStat.create(hero_id: Hero.find_by(name: 'Einher').id, physique: 6, dexerity: 4, perception: 5, inteligence: 3, self_control: 6, entropy: 3)
BaseStat.create(hero_id: Hero.find_by(name: 'Huskarl').id, physique: 5, dexerity: 6, perception: 3, inteligence: 4, self_control: 4, entropy: 5)
BaseStat.create(hero_id: Hero.find_by(name: 'Jarl').id, physique: 5, dexerity: 4, perception: 4, inteligence: 5, self_control: 5, entropy: 4)
BaseStat.create(hero_id: Hero.find_by(name: 'Łowca').id, physique: 4, dexerity: 4, perception: 6, inteligence: 4, self_control: 5, entropy: 4)
BaseStat.create(hero_id: Hero.find_by(name: 'Skald').id, physique: 3, dexerity: 5, perception: 4, inteligence: 6, self_control: 3, entropy: 6)
BaseStat.create(hero_id: Hero.find_by(name: 'Techmistrz').id, physique: 4, dexerity: 4, perception: 4, inteligence: 6, self_control: 5, entropy: 4)
BaseStat.create(hero_id: Hero.find_by(name: 'Thane').id, physique: 4, dexerity: 5, perception: 5, inteligence: 7, self_control: 4, entropy: 2)
BaseStat.create(hero_id: Hero.find_by(name: 'Trickster').id, physique: 4, dexerity: 5, perception: 5, inteligence: 5, self_control: 4, entropy: 4)
BaseStat.create(hero_id: Hero.find_by(name: 'Wieszcz').id, physique: 3, dexerity: 4, perception: 4, inteligence: 6, self_control: 3, entropy: 7)
BaseStat.create(hero_id: Hero.find_by(name: 'Wiking').id, physique: 5, dexerity: 5, perception: 5, inteligence: 4, self_control: 5, entropy: 3)
BaseStat.create(hero_id: Hero.find_by(name: 'Wólwa').id, physique: 3, dexerity: 3, perception: 3, inteligence: 6, self_control: 6, entropy: 6)
BaseStat.create(hero_id: Hero.find_by(name: 'Valkiria').id, physique: 4, dexerity: 6, perception: 5, inteligence: 4, self_control: 4, entropy: 4)
