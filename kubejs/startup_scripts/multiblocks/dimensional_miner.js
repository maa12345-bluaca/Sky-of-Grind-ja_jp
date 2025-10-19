GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('dimensional_miner')
        .category('multiblocks')
        .setEUIO('in')
        .setMaxIOSize(2, 5, 2, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('dimensional_miner', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dimensional_miner')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(() => Block.getBlock('kubejs:eternity_casing'))
        .pattern(definition => FactoryBlockPattern.start()      
        .aisle('CCC', '#E#', '#E#', '#E#', '###', '###', '###')
        .aisle('CCC', 'ECE', 'ECE', 'ECE', '#E#', '#E#', '#E#')
        .aisle('CKC', '#E#', '#E#', '#E#', '###', '###', '###')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where("E", Predicates.blocks('gtceu:eternity_frame'))
            .where("C", Predicates.blocks('kubejs:eternity_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE))
        )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("kubejs:block/casings/eternity_casing", 'gtceu:block/machines/replicator', true)
})