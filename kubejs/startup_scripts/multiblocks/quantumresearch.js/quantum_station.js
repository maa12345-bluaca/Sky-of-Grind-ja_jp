
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('quantum_station')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('quantum_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('quantum_station')
        .noRecipeModifier()
        .appearanceBlock(() => Block.getBlock('kubejs:reinforced_computation_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##CCC##', 'CCCBCCC', 'CBBBBBC', 'CCCBCCC', '##CCC##', '#######', '#######', '#######', '#######', '#######', '#######', )
            .aisle('##CCC##', 'CCCACCC', 'BAAAAAC', 'CCCACCC', 'C#CCC#C', '#CBBBC#', 'CBBBBBC', 'CBBBBBC', 'CBBBBBC', '#CBBBC#', '##CCC##', )
            .aisle('##CKC##', 'CCCBCCC', 'CBBBBBC', 'CCCBCCC', '##CCC##', '#######', '#######', '#######', '#######', '#######', '#######', )
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:fusion_glass'))
            .where('A', Predicates.blocks('kubejs:large_precision_casing'))
            .where(
                "C",
                Predicates.blocks('kubejs:reinforced_computation_casing')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                  .or(Predicates.abilities(PartAbility.MAINTENANCE))
                  .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setExactLimit(1))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("kubejs:block/casings/reinforced_computation_casing", 'gtceu:block/multiblock/research_station', true)
})