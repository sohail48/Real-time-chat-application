export const SampleChats = [
    {
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
        groupChat: true,
        members: ["1", "2"],
    },
];

export const SampleUsers = [
    {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "John Boi",
        _id: "2",
    },
];

export const SampleNotifications = [
    {
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Boi",
        },
        _id: "2",
    },
];

export const sampleMessage = [
    {
        attachments: [],
        content: "L*uda ka message hai",
        _id: "vhJKXvhKJZBHVCJkBH",
        sender: {
            _id: "user._id",
            name: "Chaman",
        },
        chat: "chatId",
        createdAt: "2024-08-25T00:00:00.000Z",
    },

    {
        attachments: [
            {
                public_id: "assadds 2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id: "vhJKXvhKJZBHVCJkBHi",
        sender: {
            _id: "kfasklnfihoas",
            name: "Chaman 2",
        },
        chat: "chatId",
        createdAt: "2024-08-25T00:00:00.000Z",
    },
];

export const dashboardData = {
    users: [
        {
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username: "john_doe",
            friends: 20,
            groups: 5,
        },
        {
            name: "John Boi",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username: "john_boi",
            friends: 20,
            groups: 25,
        },
    ],

    chats:[
        {
            name: "Khan Group",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [
                {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
                {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            ],
            totalMembers: 2,
            totalMessages: 25,
            creator: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },

        {
            name: "Engineer Group",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: true,
            members: [
                {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
                {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
            ],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Boi",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },      
    ],

    messages: [
        {
            attachments: [],
            content: "L*uda ka message hai",
            _id: "vhJKXvhKJZBHVCJkBH",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman",
            },
            chat: "chatId",
            groupChat: false,
            createdAt: "2024-08-25T00:00:00.000Z",
        },
    
        {
            attachments: [
                {
                    public_id: "assadds 2",
                    url: "https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            content: "",
            _id: "vhJKXvhKJZBHVCJkBHi",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman 2",
            },
            chat: "chatId",
            groupChat: true,
            createdAt: "2024-08-25T00:00:00.000Z",
        },
    ]
};


