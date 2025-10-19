GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_solar_panel')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(3, 0, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_solar_panel', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .generator(true)
        .recipeType('large_solar_panel')
        .noRecipeModifier()
        .appearanceBlock(GTBlocks.MACHINE_CASING_HV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#', '#BBB#', '#CCC#', '#####')
            .aisle('CCCCC', 'B###B', 'CTTTC', '#TOT#')
            .aisle('CCCCC', 'B###B', 'COOOC', '#TOT#')
            .aisle('CCCCC', 'B###B', 'CTTTC', '#TOT#')
            .aisle('#CKC#', '#CCC#', '#CCC#', '#####')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('O', Predicates.blocks('minecraft:blue_stained_glass'))
            .where('T', Predicates.blocks('minecraft:light_blue_stained_glass'))
            .where("C", Predicates.blocks('gtceu:clean_machine_casing')
            .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY))
            .or(Predicates.blocks('gtceu:ulv_input_bus'))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_clean_stainless_steel", 'gtceu:block/multiblock/hpca', true)
    })