const getGoals = asyncHandler (async(req, res)=>{
    const goals = await Goal.find({ user: req.user.id })
    const setGoal = asyncHandler (async(req, res)=>{
        const goal = await Goal.create({
            text: req.body.text,
            user: req.user.id, 
        })
        // @route   PUT /api/goals
        const updateGoal =asyncHandler (async(req, res)=>{
            // @route   delete /api/goals
            const deleteGoal = asyncHandler (async(req, res)=>{
            })
            getGoals,  