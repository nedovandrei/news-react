// Define the shape of the data returned by the GraphQL query
interface ContentDto {
    id: string;
  }
  
  // Define the Content class
  class Content {
    id: string;
  
    constructor(id: string) {
      this.id = id;
    }
  
    // Method to create a Content instance from the data transfer object (DTO)
    static fromDto(dto: ContentDto): Content {
      return new Content(dto.id);
    }
  }
  
  export default Content;
  