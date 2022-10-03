import random from 'random'

const firstSentence = ["You wander in order to tell the future.", "Wandering the whispering realms soothes you.", "Your dreams are plagued by invisible demons.", "Whispers of her voice follow you in your dreams.", "It began with a distant howl of wolf or wind.", "Once, you forgot what it was like to dream.", "A forgotten dream keeps you awake, unable to redream it.", "Our worst fears can come for us in the night's whispers.", "You can change the world through your dreams.", "You go places you have never visited in your dreams.", "To dream is to fly without wings.", "The air always feels different in dreams.", "In dreams, we can face our fears.", "Dreams are a way to remember what we forgot.", "Have you ever solved a mystery while asleep?", "In your dreams, you feel you have escaped.", "To dream of past or future is to travel in time.", "We can find answers to hard questions together in a dream.", "You always suspected dreams were a form of divination.", "Could dreams be a way to practice for life?", "In our dreams, we can take our true form.", "Dreams come true, but often not how we expect.", "Your soul cannot speak in words so it speaks in dreams.", "Dreams are a way to sort through the clutter of the mind.", "Dreams are stories our subconscious speaks.", "Some dreams are both frightening and beautiful.", "From time to time, a nightmare can turn into beauty.", "When you fall asleep, you peer through an unseen window.", "Whispers of your waking wishes paint your dreamscapes.", "Your dreams show you are never truly alone.", "Create in your dreams, recreate in your life.", "Dreams can often be an escape from distress.", "When you dream, the past and future blend into now.", "A waking life inspired by the depths of dreams will rise.", "Your slumbers manifest the sparks of your creative spirit.", "Dreams in dreams are summoned by your subconscious.", "Dreams are the nightlife of your soul.", "Every dream has a lesson to impart.", "You journal what fragments of dreams you remember.", "You dream, therefore you are.", "Even nightmares teach lessons.", "Your subconscious lays the trails you wander.", "To be lucid during slumber is a tricky task.", "Even confusing dreams have important interpretations.", "Every wandering dream begins with a single step.", "Dreams are where we plant seedlings of reality.", "With every closed eye, a different sort opens.", "Every dream expands your perception.", "Awaking from a dream shatters a fragile reality.", "You always unawaken with a furious frolic.", "You unawaken in a slight sweat cold against the void.", "Dreams are abstract mazes created by the mind."]

const secondSentence = ["You enjoy the feeling of visiting unfamiliar places.", "You enjoy the juice of freshly squeezed oranges.", "Apples are your favorite fruit.", "The scent of cherry blossoms allures you.", "You love being drugged by the scent of azaleas.", "You feel at home whenever you see a field of corn.", "You have a deep fascination with the stars.", "You enjoy the company of bats.", "You always find the moon to be beautifully mysterious.", "You have an affinity for finding things in the dark.", "Your favorite smell is a long-awaited rain.", "You smile when listening to thunder.", "You can't help but always dance in the rain.", "You always find solace in the woods.", "You have always been drawn to fire.", "Solitude is a serious source of comfort for you.", "You always go barefoot.", "You enjoy the taste of the salt on your skin.", "You are most at peace when watching the ocean.", "You love listening to the rain hit the leaves on trees.", "You always feel at peace when submerged in water.", "Sleeping in a tent in the mountains is your ideal vacation.", "Sunsets over a lake bring you immense calm.", "A perfectly ripe mango never lasts long in your presence.", "You live for snuggles with human and critter alike.", "Seeing fireflies always makes you misty-eyed.", "Freshly tilled earth has a smell that makes your skin tingle.", "The crunch of leaves underfoot is your favorite sound.", "Lightning never fails to amaze you.", "You love the sound of rain on a tin roof.", "You love books for giving you a taste of a waking dream.", "You constantly yearn for romantic experiences.", "Constructing things from freshly fallen snow gives you joy.", "You love walking on untouched blankets of snow.", "You love watching — but are scared of — waterfalls.", "You anticipate the feeling of sun on your skin each morning.", "You would love to have a pet goat someday.", "You have fantasies of living in a treehouse.", "You photograph every rainbow that you can find.", "Rain on pavement casts a spell that enchants you.", "You never mind getting a bit of mud on your shoes.", "You relish the first snowfall each winter.", "You like sitting around bonfires with friends.", "You love cheesecake — but only if topped with berries.", "You love green tea — with a dollup of honey, that is.", "A kneading cat always soothes your soul.", "You joyfully gather wild onions every spring.", "A perfectly ripe apple never lasts long in your presence.", "A perfectly ripe strawberry never lasts long in your presence."]

const thirdSentence = ["Your garden is diligently weeded.", "Your bed is always neatly made.", "You never think to clean your room.", "You walk your dog before and after you sleep.", "You have four cats, two of them black.", "While awake, you travel often as well.", "You keep old books around for the smell.", "You are known for giving your friends tarot readings.", "You make a point to learn at least one new thing daily.", "You can cook almost anything without a recipe.", "You always have fresh flowers in your home.", "Most of your clothes are hand-made.", "You only wear hand-me-downs and thrift shop clothes.", "You are working to conquer your fear of needles.", "You are double-jointed and love showing it off.", "You keep cats despite being allergic.", "You go on walks in nature every single day.", "You are an only child, and it gets lonely.", "Your parents may be divorced, but you're okay with it.", "You check out books at the library every Wednesday.", "You raise ducks for eggs in your backyard.", "You are a bit of a tomboy, even if you like pretty things.", "You are a gifted artist, even if insecure in your talent.", "Those around you come to you because you listen well.", "You are fantastic at flute and okay at oboe.", "You have a specific playlist for focusing on chores.", "You let anxiety keep you away from exciting social situations.", "Everyone always asks you for tips on cooking.", "You love to bake, even if it means you eat too many sweets.", "You still sleep with a night light on which Beakon has you focus.", "You often have trouble sleeping because of your overactive mind.", "You have a collection of leaves and flowers pressed in books.", "Your pitch-perfect singing enchants everyone around you.", "Every weekend, you go to the farmer's market.", "You are a homebody, eager for cozy nights in.", "You're a night owl who can only get things done at night.", "You have a part-time job in a used bookstore.", "You meditate every day by the window in your bedroom.", "You don't like being a leader, but people always seem to follow.", "You have a childlike sense of wonder.", "You are mystifying at channeling anguish into beauty.", "You do karaoke every Tuesday — but only in a private booth.", "You play tabletop RPGs with your closest friends.", "Your favorite conversations are in line for roller coasters.", "You tell people you roast chestnuts over an open fire but are kidding.", "Your porch has potted tomato plants — a member of the nightshades.", "Your grandfather gave you an eclectic library of first edition books."]

const fourthSentence = ["Enjoy the sun today.", "Bask in the moonlight.", "Nature calls.", "Join the chorus of birds.", "The endless trail awaits.", "No pain, no rain.", "Look up at the stars tonight.", "Every night is a new story.", "As long as there's sun, there'll be another day.", "The best thing about nature is that it's always changing.", "You can never get lost if you don't mind where you end up.", "Savor the rain as it falls.", "The stars guide you.", "Never let a storm stop you.", "Seize the night.", "Life is a mystery with endless twists.", "It's not over until it's over.", "Search your heart for fury.", "There's always room for improvement.", "Failure is just strengthening for success.", "Trees are resilient because they never stop growing.", "Learning is its own kind of magic.", "Dream on.", "Follow your bliss.", "Everything is interconnected.", "All we truly have is the present.", "Let go of the burdens holding you down.", "Energy flows where intention goes.", "Love and be loved in return.", "Luck is summoned by the crafty.", "Never let the world's rain snuff your soul's fire.", "A kind heart is the fiercest magic.", "Embrace what makes you unique.", "Magic is accomplishing what seemed impossible.", "No reagent is as potent as determination.", "Convictions give you resillience.", "Be the wonder the world desires.", "Tie a spectral thread from your heart to your dreams.", "Cherish that precious resource time.", "Much deemed impossible is merely improbable.", "Carry what you need, even if it has thorns.", "A scar is a record of healing's magic.", "You are a star, but be grateful for those for whom you shine.", "Nothing can age the spirit that is strong.", "Memories and mementos are worth more than money.", "For the most important rewards, there is always risk.", "Be the light that illuminates other's shine.", "Mould the malleable masonry around you.", "In your potential, you have limitless power.", "Happiness is doing what you love.", "Seek your destiny through the dreamy dark.", "Imagination will take you places.", "Blood is what gives our breath magic.", "Your destiny is like a rabbit giving chase.", "Here, your intuition is a compass.", "Where there is no sky there are no limits.", "Adversity is an egg with opportunity inside.", "Curiosity will light the way.", "Experience bestows wisdom."]

export default class WitchDescriber {
    describe(tokenId: number) {
        let description = `${firstSentence[random.int(0,firstSentence.length-1)]} ${secondSentence[random.int(0,secondSentence.length-1)]} ${thirdSentence[random.int(0,thirdSentence.length-1)]} ${fourthSentence[random.int(0,fourthSentence.length-1)]}`

        return description
    }
}