import { ITopicsService } from "./topics.service";


export class TopicsServiceStub implements ITopicsService {
    private selection = [
        {
            topic: {
            id: "topic1",
            title: "Topic one",
            content: "Topic one test content"
            },
            selected: false
        },
        {
            topic: {
            id: "topic2",
            title: "Topic two",
            content: "Topic two test content"
            },
            selected: false
        },
    ];
    public getSelection = () => this.selection;
    public setSelected(id, selected) {
        this.selection.find(s => s.topic.id == id).selected = selected;
    }
};