GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('circuit_assembly_line')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(16, 1, 4, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('circuit_assembly_line', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('circuit_assembly_line')
        .appearanceBlock(() => Block.getBlock('kubejs:large_precision_casing'))
        .pattern(definition => FactoryBlockPattern.start(/*BACK, UP, RIGHT*/)
            .aisle('COC', 'GDG', 'CDC', ' F ')
            .aisle('CIC', 'GDG', 'YDC', ' F ').setRepeatable(3, 15)
            .aisle('CIC', 'GDG', 'KDC', ' F ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:large_precision_casing')
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4)))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('F', Predicates.blocks('kubejs:large_precision_casing')
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(3)))
            .where('Y', Predicates.blocks('kubejs:large_precision_casing')
                    .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setExactLimit(1)))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('D', Predicates.blocks('kubejs:quantum_casing'))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "kubejs:block/casings/large_precision_casing", "gtceu:block/multiblock/assembly_line", false
        )
})