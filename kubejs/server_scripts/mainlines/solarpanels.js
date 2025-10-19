ServerEvents.recipes(sog => {


    sog.shaped(
    '4x solarflux:mirror',
    ['AAA', 'BBB', 'AAA'],
    {
        A: 'gtceu:silver_plate',
        B: 'minecraft:glass'
})
sog.shaped(
    '4x solarflux:sp_1',
    ['AAA', 'BCB', 'GGG'],
    {
        A: 'solarflux:mirror',
        B: '#gtceu:circuits/lv',
        G: 'enderio:pulsating_alloy_grinding_ball',
        C: 'gtceu:double_steel_plate'
})
sog.shaped(
    'solarflux:sp_2',
    ['ABA', 'EFE', 'GFG'],
    {
        A: 'solarflux:mirror',
        B: '#gtceu:circuits/mv',
        F: 'solarflux:sp_1',
        E: 'gtceu:double_aluminium_plate',
        G: 'gtceu:silicon_plate'
})
sog.recipes.gtceu.assembler('photovoltaic_1')
.itemInputs('8x solarflux:mirror')
.inputFluids('gtceu:polyethylene 63')
.circuit(24)
.itemOutputs('2x solarflux:photovoltaic_cell_1')
.duration(100)
.EUt(GTValues.VA[GTValues.MV]);
sog.shaped(
    'solarflux:sp_3',
    ['ABA', 'EFE', 'GFG'],
    {
        A: 'solarflux:photovoltaic_cell_1',
        B: '#gtceu:circuits/hv',
        F: 'solarflux:sp_2',
        E: 'gtceu:double_stainless_steel_plate',
        G: 'gtceu:manganese_phosphide_single_wire'
})
sog.shaped(
    'solarflux:sp_4',
    ['ABA', 'EFE', 'GFG'],
    {
        A: 'solarflux:photovoltaic_cell_2',
        B: '#gtceu:circuits/ev',
        F: 'solarflux:sp_3',
        E: 'gtceu:titanium_rotor',
        G: 'gtceu:double_ultimet_plate'
})
sog.recipes.gtceu.assembler('photovoltaic_2')
.itemInputs('4x solarflux:photovoltaic_cell_1')
.inputFluids('gtceu:polytetrafluoroethylene 63')
.circuit(24)
.itemOutputs('2x solarflux:photovoltaic_cell_2')
.duration(100)
.EUt(GTValues.VA[GTValues.EV]);
sog.recipes.gtceu.assembler('photovoltaic_3')
.itemInputs('4x solarflux:photovoltaic_cell_2')
.inputFluids('gtceu:polybenzimidazole 63')
.circuit(24)
.itemOutputs('2x solarflux:photovoltaic_cell_3')
.duration(100)
.EUt(GTValues.VA[GTValues.IV]);
sog.shaped(
    'solarflux:sp_5',
    ['ABA', 'EFE', 'GFG'],
    {
        A: 'solarflux:photovoltaic_cell_3',
        B: '#gtceu:circuits/iv',
        F: 'solarflux:sp_4',
        E: 'gtceu:osmiridium_gear',
        G: 'gtceu:advanced_smd_transistor'
})
sog.recipes.gtceu.assembly_line('sp_6')
.itemInputs('8x gtceu:advanced_smd_resistor', '8x gtceu:advanced_smd_capacitor', '8x gtceu:advanced_smd_transistor', '8x gtceu:advanced_smd_inductor', '8x gtceu:advanced_smd_diode', '2x solarflux:photovoltaic_cell_4', '2x solarflux:sp_5', '8x bloodmagic:dungeon_metal')
.itemOutputs('solarflux:sp_6')
.inputFluids(
  Fluid.of('gtceu:soldering_alloy', 1152),
  Fluid.of('gtceu:polybenzimidazole', 150),
)
.duration(100)
.EUt(GTValues.VA[GTValues.IV])
sog.recipes.gtceu.chemical_reactor('photovoltaic_5')
.itemInputs('4x solarflux:photovoltaic_cell_4')
.inputFluids('gtceu:polybenzimidazole 63', 'gtceu:naquadria 144')
.circuit(24)
.itemOutputs('2x solarflux:photovoltaic_cell_5')
.duration(100)
.EUt(GTValues.VA[GTValues.ZPM]);
sog.recipes.gtceu.atomicforge('photovoltaic_6')
.itemInputs('4x solarflux:photovoltaic_cell_5')
.inputFluids('gtceu:condensed_star_matter 2500', 'gtceu:naquadria 144')
.circuit(24)
.itemOutputs('2x solarflux:photovoltaic_cell_6')
.duration(100)
.EUt(GTValues.VA[GTValues.UV]);
sog.recipes.gtceu.assembly_line('sp_7')
.itemInputs('8x gtceu:advanced_smd_resistor', '8x gtceu:advanced_smd_capacitor', '8x gtceu:advanced_smd_transistor', '8x gtceu:advanced_smd_inductor', '8x gtceu:advanced_smd_diode', '2x solarflux:photovoltaic_cell_5', '2x solarflux:sp_6', '32x gtceu:fine_uranium_rhodium_dinaquadide_wire', '32x gtceu:fine_uranium_rhodium_dinaquadide_wire')
.itemOutputs('solarflux:sp_7')
.inputFluids(
  Fluid.of('gtceu:soldering_alloy', 1152),
  Fluid.of('gtceu:naquadria', 1152),
)
.duration(100)
.EUt(GTValues.VA[GTValues.IV])
sog.recipes.gtceu.assembly_line('sp_8')
.itemInputs('16x gtceu:advanced_smd_resistor', '16x gtceu:advanced_smd_capacitor', '16x gtceu:advanced_smd_transistor', '16x gtceu:advanced_smd_inductor', '16x gtceu:advanced_smd_diode', '2x solarflux:photovoltaic_cell_6', '2x solarflux:sp_7', 'kubejs:condensed_star_matter', '4x gtceu:blacklight')
.itemOutputs('solarflux:sp_8')
.inputFluids(
  Fluid.of('gtceu:soldering_alloy', 1152),
  Fluid.of('gtceu:naquadria', 1152),
)
.duration(100)
.EUt(GTValues.VA[GTValues.UV])
sog.shaped(
    'solarflux:blank_upgrade',
    [' A ', 'ABA', ' A '],
    {
        A: 'gtceu:double_vanadium_steel_plate',
        B: 'solarflux:photovoltaic_cell_2',
})
sog.shaped(
    'solarflux:ae2/energy_upgrade',
    [' A ', 'ABA', ' A '],
    {
        A: 'solarflux:blank_upgrade',
        B: 'ae2:energy_acceptor',
})

})