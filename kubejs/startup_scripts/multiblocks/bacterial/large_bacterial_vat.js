GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_bacterial_vat')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 3, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_bacterial_bat', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_bacterial_vat')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.MACHINE_CASING_UV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAAAAAA', 'CCCCCCC', 'CCCCCCC', 'CCCCCCC', 'AAAAAAA')
            .aisle('ATTTTTA', 'C#####C', 'C#####C', 'C#####C', 'ATTTTTA')
            .aisle('ATTTTTA', 'T#####T', 'T#####T', 'T#####T', 'ATTTTTA')
            .aisle('ATTTTTA', 'C#####C', 'C#####C', 'C#####C', 'ATTTTTA')
            .aisle('AAAKAAA', 'CCCCCCC', 'CCCCCCC', 'CCCCCCC', 'AAAAAAA')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('T', Predicates.blocks('gtceu:sterilizing_filter_casing'))
            .where('C', Predicates.blocks('gtceu:cleanroom_glass'))
            .where(
                "A",
                Predicates.blocks('gtceu:plascrete')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                  .or(Predicates.abilities(PartAbility.MAINTENANCE))
                  .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/cleanroom/plascrete", 'gtceu:block/machines/replicator', true)
})