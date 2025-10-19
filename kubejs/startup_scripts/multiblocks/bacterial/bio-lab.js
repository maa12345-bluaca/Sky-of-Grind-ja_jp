GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('biolab')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 4, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bio_lab', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('biolab')
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.MACHINE_CASING_UV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAAAA', 'ATTTA', 'ATTTA', 'ATTTA', 'AAAAA')
            .aisle('AFBFA', 'C###C', 'C###C', 'C###C', 'ATTTA')
            .aisle('ABBBA', 'L#F#L', 'L#F#L', 'L#F#L', 'ATTTA')
            .aisle('AFBFA', 'C###C', 'C###C', 'C###C', 'ATTTA')
            .aisle('AAKAA', 'CCCCC', 'CCCCC', 'CCCCC', 'AAAAA')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:heat_vent'))
            .where('F', Predicates.blocks('gtceu:uhv_hermetic_casing'))
            .where('L', Predicates.blocks('gtceu:electrolytic_cell'))
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