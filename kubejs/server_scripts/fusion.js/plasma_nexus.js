ServerEvents.recipes(sog => {



sog.recipes.gtceu.plasma_nexus('energized_anomaly')
.circuit(1)
.inputFluids('gtceu:eternity 20', 'gtceu:hypercharged_nihonium_plasma 256000')
.itemInputs('2x kubejs:quantum_anomaly')
.itemOutputs('1x kubejs:energized_quantum_anomaly')
.duration(64*60)
.EUt(GTValues.VA[GTValues.UXV]);
sog.recipes.gtceu.plasma_nexus('quantum_anomaly')
.inputFluids('gtceu:eternity 20')
.itemInputs('1x kubejs:quantum_anomaly')
.itemOutputs('2x kubejs:quantum_anomaly')
.duration(64*60)
.EUt(GTValues.VA[GTValues.UXV]);


})